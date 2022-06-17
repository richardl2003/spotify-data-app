import React from 'react'
import { useState, useEffect } from 'react'
import { TrackList, SectionWrapper, TimeRangeButtons, Loader } from '../components'
import { getTopTracks } from '../spotify'
import { catchErrors } from '../utils'

const TopTracks = () => {
    const [topTracks, setTopTracks] = useState(null);
    const [activeRange, setActiveRange] = useState('short');

  useEffect(() => {
    const fetchData = async () => {
    const { data } = await getTopTracks(`${activeRange}_term`);
      setTopTracks(data);
    };

    catchErrors(fetchData());
  }, [activeRange]);

    return (
        <main>
            <SectionWrapper title="Top Tracks" breadcrumb={true}>
            <TimeRangeButtons
                activeRange={activeRange}
                setActiveRange={setActiveRange}
            />
    
            {topTracks && topTracks.items ? (
                <TrackList tracks={topTracks.items} />
            ) : (
              <Loader />
            )}
            </SectionWrapper>
        </main>
    )
}

export default TopTracks