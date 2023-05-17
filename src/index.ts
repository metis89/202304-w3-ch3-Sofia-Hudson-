/* eslint-disable no-new */
import { Footer } from "./components/footer";
import { Form } from "./components/form";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { List } from "./components/pets.list";
import "./style.css";

new Header("#app");
new Main("#app");
new List("main");
new Form("main");
new Footer("#app");
