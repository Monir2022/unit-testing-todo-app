import ButtonAddItem from "../components/ButtonAddItem";
export default function WelcomeScreen() {
  return (
    <div data-testid='welcomeScreen' className="welcome-screen">
      <h1>EIKA's shopping list</h1>
      <p>
        Welcome to EIKA’s shopping list. Here you will be able to create a todo
        list with for the furniture you want to buy.
      </p>
      <p>
        To get started press the Add new item button and a popup will ask you
        the name and the price of the item you want to add. 
      </p>      
      <ButtonAddItem />
    </div>
  );
}