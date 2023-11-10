import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { getMessage } from "@helpers/getMessage";
import PrimaryButton from "@components/buttons/PrimaryButton";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show_password, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  const navigate = useNavigate()

  const login_user_handler = async () => {
    setLoading(true);
    try {
      // const { data } = await axios.post(`${apiUrl}/api/auth/login`, {
      //   email,
      //   password,
      // })
      // dispatch({ type: 'USER_LOGIN', payload: data })
      // Cookies.set('userInfo', JSON.stringify(data), { expires: 7 })
      // setTimeout(() => {
      //   //@ts-ignore
      //   history.push(redirect || '/')
      // }, 1000)
      navigate('/dashboard')
      setLoading(false);
      toast({
        title: "Login successful.",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    } catch (error: any) {
      setLoading(false);
      //@ts-ignore
      toast({
        title: getMessage(error),
        status: "error",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  // const login_With_Google = async () => {
  //   try {
  //     setLoading(true);
  //     // const res = await signInWithPopup(auth, googleProvider)
  //     // const user = res.user
  //     // const { data } = await axios.post(`${apiUrl}/api/auth/login`, {
  //     //   email: user.email,
  //     //   googleAuthId: user.uid,
  //     // })
  //     // dispatch({ type: 'USER_LOGIN', payload: data })
  //     // history.push('/explore')
  //     setLoading(false);
  //     navigate('/dashboard')
  //     toast({
  //       title: "Login Successful",
  //       status: "success",
  //       position: "top-right",
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //   } catch (error: any) {
  //     setLoading(false);
  //     toast({
  //       title: getMessage(error),
  //       status: "error",
  //       position: "top-right",
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //   }
  // };
  return (
    <>
      <div className="flex min-h-screen flex-col bg-gray-100 sm:px-6 lg:px-8">
        <div className="pt-12 sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="my-2 text-center text-lg font-extrabold text-gray-900 md:text-3xl">
            Login
          </h1>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
           

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none  sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <div className="flex flex-row items-center rounded-md border border-gray-300 px-3 shadow-sm ">
                    <input
                      id="password"
                      name="password"
                      type={show_password ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full appearance-none py-2  placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                    {show_password ? (
                      <div onClick={() => setShowPassword(false)}>
                        <EyeSlashIcon
                          height={20}
                          width={20}
                          className="text-gray-400"
                        />
                      </div>
                    ) : (
                      <div
                        onClick={() => setShowPassword(true)}
                        className="cursor-pointer"
                      >
                        <EyeIcon
                          height={20}
                          width={20}
                          className="text-gray-400"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-blue-primary focus:ring-red-400"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="/forgot-password"
                    className="font-medium text-blue-primary hover:text-red-400"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <PrimaryButton
                  text="Sign In"
                  className="w-full"
                  onClick={login_user_handler}
                  loading={loading}
                />
              </div>

              <div className="my-4 cursor-pointer text-center text-sm font-semibold text-gray-500 hover:text-gray-700">
                <Link to="/login">Not registered? Register instead!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
