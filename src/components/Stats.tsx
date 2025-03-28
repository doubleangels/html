import { data } from "./data";
import Stat from "./Stat";
import { memo } from "react";

function Stats() {
  return (
    <section id="stats" className="count-up stats-section">
      <div className="row">
        <div className="col-twelve">
          <div className="stats-wrapper block-1-6 block-s-1-3 block-tab-1-2 block-mob-full">
            {data.statsData.stats.map((item) => (
              <Stat 
                key={item.text} 
                {...item} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Stats);
