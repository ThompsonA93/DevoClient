import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { W3Context } from '../../context/W3Context';

const Proposal = () => {
    const { ballotData } = useContext(W3Context);
    const router = useRouter();

    return (
        ballotData.map(poll => {
            if (poll.id == router.query.id) {
                console.log("Rendering Ballot" + poll.id + " - " + poll.title);
                return (
                    <div>
                        <section className="hero is-small has-background-grey">
                            <div className="hero-body">
                                <p className="title has-text-white">
                                    Proposal #{poll.id}
                                </p>
                            </div>
                        </section>
                        <div className='container mt-5'>
                            <h1 className="title">{poll.title}</h1>
                            <h2 className="subtitle">by {poll.creator}</h2>
                            <div className='section'>
                                {poll.metainfo}
                                <div className='mt-5'>Voting ends on {poll.endDate} days</div>
                            </div>
                            <div className="field is-grouped">
                                <p className="control">
                                    <button className="button is-large is-success">Vote Yes</button>
                                </p>
                                <p className="control">
                                    <button className="button is-large is-danger">Vote No</button>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    )
}

export default Proposal;