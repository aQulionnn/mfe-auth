import type { Container } from "react-dom/client";
import baseMount from "../utils/bootstrap";
import Auth from "./Auth";

export const mount = (rootElement: Container) => baseMount(Auth, rootElement);