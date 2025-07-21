import Header from "../Header";
import { Provider } from "react-redux"; 
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test('renders heading and subheading text', () => {

    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />;
        </Provider>
    </BrowserRouter>)
});