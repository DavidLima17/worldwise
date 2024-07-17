import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";

function CityList({ cities, isLoading }) {
  if (isLoading) <Spinner />;

  if (!cities.length)
    return <Message message={"add your first city by clicking on the map"} />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} />
      ))}
    </ul>
  );
}

export default CityList;
