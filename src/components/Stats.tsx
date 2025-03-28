import { data } from "./data";
import Stat from "./Stat";

export default function Stats() {
    return (
        <section id="stats" className="count-up">
            <div className="row">
                <div className="col-twelve">
                <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full">
                    {data.statsData.stats.map((item, index) => (
                    <Stat key={index} {...item} />
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}