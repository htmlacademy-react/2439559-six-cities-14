import MainScreen from '../../pages/main-screen/main-screen';

type MainScreenProps = {
  sum: number;
};

export default function App({ sum }: MainScreenProps) {
  return (
    <>
      <MainScreen sum={sum} />
    </>
  );
}
