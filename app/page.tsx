import ExploredBtn from "@components/ExploredBtn";
import EventList from "@components/EventList";

const Page = () => {
    return (
        <section>
            <h1 className="text-center">The Hub fpr Every Dev <br/> Event You can not Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups, and Conference, All in One Place</p>

            <ExploredBtn/>

            <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <EventList />
            </div>
        </section>
    )
};
export default Page
