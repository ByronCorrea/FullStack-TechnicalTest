import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loader } from "./components/Loader/Loader";

export const ProtectedRoute = ({ component, role }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loader />,
  });

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (role === "admin" && !user?.isAdmin) {
      navigate("/notAllowed");
    }
    if (user?.isBanned) {
      navigate("/notAllowed");
    }
  }, [user, navigate, role]);

  return <Component />;
};
