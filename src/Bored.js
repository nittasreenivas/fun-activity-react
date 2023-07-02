import { useState } from "react";
export default function Bored() {
  const [activity, setActivity] = useState("");

  const getActivity = async () => {
    const res = await fetch("https://www.boredapi.com/api/activity/");
    const data = await res.json();

    setActivity(data);
    console.log("data::", data);
  };
  // useEffect(() => {
  //  getActivity()
  // },[])
  return (
    <div>
      <section className="bored">
        <h2> Sorry for being Bored</h2>
        <p> use the button to genereate a fun activity to try </p>
        <button className="btn" onClick={getActivity}>
          Generate Activity{" "}
        </button>

        {activity ? (
          <div>
            <article>Activity Name: {activity.activity} </article>
            <article>Activity type: {activity.type} </article>
            {activity.link && (
              <article>
                <a href={activity.link}> {activity.link} </a>
              </article>
            )}
            <article>
              Number of persons needed: {activity.participants}{" "}
            </article>
          </div>
        ) : (
          <p> click on button to get a list of fun activities you can do </p>
        )}
      </section>
    </div>
  );
}
