import "./styles/quasar.sass";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import { Notify } from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
  plugins: {
    Notify
  },
  config: {
    notify: { /* look at QuasarConfOptions from the API card */ }
  }
};
