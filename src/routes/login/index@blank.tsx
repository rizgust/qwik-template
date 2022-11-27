import { component$, Resource, useResource$, useStore, useWatch$ } from "@builder.io/qwik";
import { DocumentHead, RequestHandler, useEndpoint } from "@builder.io/qwik-city";
import { Button } from "~/components/button/button";
import { CardContent } from "~/components/card";
import { TextInput } from "~/components/text-input/text-input";
import { fetchUser } from "~/services/api";

interface State {
  email: string;
  password: string;
}

interface ErrorProps{
  field: string;
  message: string;
}

export default component$((props: { state: State }) => {
  const store = useStore<State>({
    email: "AAAAAAAAAA",
    password: ""
  });

  useWatch$(({ track }) => {
    // track changes in store.count
    track(() => store.email);
    console.log('email changed');
  });

  const endpointData = useEndpoint<ReturnType<typeof onPost>>();
  // const validateEmail = useResource$<{
  //   email: string;
  //   age: number;
  //   count: number;
  // }>(async ({ track, cleanup }) => {
  //   track(() => store.email);
  //   const abortController = new AbortController();
  //   cleanup(() => abortController.abort('cleanup'));
  //   const res = await fetch(`https://api.agify.io?name=${store.name}`, {
  //     signal: abortController.signal,
  //   });
  //   return res.json();
  // });
  return (
    <Resource
      value={endpointData}
      onPending={() => <div>Loading...</div>}
      onRejected={() => <div>Error</div>}
      onResolved={(data: any, email= props.state.email) => (
        <CardContent className="w-96">
          <form method="POST" class="flex flex-col space-y-4">
            <TextInput
              onChange$={(e: any) => ( store.email = (e.target as HTMLInputElement).value)}
              type="email"
              label="email"
              placeholder="enter your email"
              status={data?.error?.username ? "error" : ""}
              message={data?.error ? data.error.username : ""}
            />
            <TextInput
              type="password"
              label="password"
              placeholder="enter your password"
              status={data?.error?.password ? "error" : ""}
              message={data?.error ? data.error.password : ""}
            />
            <Button type="submit" >
              Login
            </Button>
          </form>
          {data?.error?.message && (
            <div class="mt-6 border border-red-300 text-red-500 p-4">
              <p>{data.error.message}</p>
              {data.error.documentation_url && (
                <a
                  href={data.error.documentation_url}
                  target="_blank"
                  class="text-blue-500 mt-2 block"
                >
                  View details
                </a>
              )}
            </div>
          )}
        </CardContent>
      )}
    />
  );
});

export const onPost: RequestHandler = async ({ request, response }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  var errors : ErrorProps[] = []
  if (!username || username.toString().trim().length === 0) {
    errors.push( {
      field: "username",
      message: "Username is required!",
    });
  }
  if (!password || password.toString().trim().length === 0) {
    errors.push( {
      field: "password",
      message: "password is required!",
    });
  }
  if(errors.length>0){
    return errors;
  }

  const [ok, data] = await fetchUser(username!.toString());

  if (!ok) {
    return {
      error: data,
    };
  }

  throw response.redirect(`/${username}`);
};


export const head: DocumentHead = {
  title: 'Home | Qwikhub',
  meta: [
    {
      name: 'description',
      content: 'Web app build with github rest api and qwikcity',
    },
  ],
};