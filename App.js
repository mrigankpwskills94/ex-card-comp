import { SafeAreaView, Image } from "react-native";
import Card from "./components/Card";

const App = () => {
    const cardImage = require("./assets/myImage.jpg");

    return (
        <SafeAreaView>
            <Card
                title={"Card Title!"}
                description={"This is the card description."}
            />
            <Card
                title={"Does this image look good?"}
                description={"Yes, it does!."}
                imageSource={cardImage}
            />
        </SafeAreaView>
    );
};

export default App;
