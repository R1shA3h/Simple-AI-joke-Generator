import { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supa from "../../supa_config";
import { useRouter } from 'next/router'; 


const AuthUi = () => {
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supa.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        console.log("Logged in")
        router.push("/generate-joke")
        return
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="mx-auto w-[400px] mt-20">
      <Auth
      supabaseClient={supa}
      // providers={["google", "github", "apple", "discord"]}
      providers={[]}
      // controls whether to display only social providers
      // onlyThirdPartyProviders
      redirectTo="http://localhost:3000/authenticated"
      // comes with preconfigured themes, can add custom themes
      appearance={{ theme: ThemeSupa }}
      // controls how to display the social provider icons
      socialLayout="horizontal"
    />
    </div>
  );
};

export default AuthUi;