import Link from 'next/link'


const Help = () => {
    return (
        <div>
            <section className="hero is-small has-background-grey">
                <div className="hero-body">
                    <p className="title has-text-white">
                        Help
                    </p>
                </div>
            </section>
            <div className='container'>
                <section className="section">
                    <h2 className="subtitle">The Project</h2>
                    <p>
                        The goal of this research project, DeVoS, is the fundamental analysis, specification and creation of a full-fledged DLT-Voting system conforming to constitutional rights and requirements for effective use in future democratic systems.
                        The resulting knowledge of both the thesis and the project will aid any present and future, democratic governments in their implementation of voting functionalities in pursuit for a true, transparent, free, equal and direct democracy.
                    </p>
                </section>
                <section className="section">
                    <h2 className="subtitle">Getting Started</h2>
                    <h3>1. Installing MetaMask</h3>
                    <p>First, you need to install MetaMask, a Browser-Plugin that allows you to connect to blockchain systems.</p>
                    <a href="https://metamask.io/" target="_blank">
                        <div className='box'>
                            <figure className="image is-3by1">
                                <img src="MetaMask.svg" />
                                Download MetaMask now!
                            </figure>
                        </div>
                    </a>
                    <h3>2. Create a Wallet</h3>
                    <p>The first step after installing MetaMask is the setup of the Wallet.</p>
                    <p>MetaMask will guide you accordingly through the setup.</p>

                    <h3>3. Connect to the Rinkeby Network</h3>
                    <p>Once Metamask is installed, you need to select and connect to the correct Network.</p>
                    <p>As of May, 2022, DeVoS is deployed within the Rinkeby-Network.</p>
                    <div className='columns m-5'>
                        <div className='column is-one-quarter'>
                            <figure className="image">
                                <img src="MetaMask_Setup00.png" />
                                1. Select 'Ethereum Mainnet'
                            </figure>
                        </div>
                        <div className='column is-one-quarter'>
                            <figure className="image">
                                <img src="MetaMask_Setup01.png" />
                                2. Show/Hide test networks
                            </figure>
                        </div>
                        <div className='column is-one-quarter'>
                            <figure className="image">
                                <img src="MetaMask_Setup02.png" />
                                3. Show test networks
                            </figure>
                        </div>
                        <div className='column is-one-quarter'>
                            <figure className="image">
                                <img src="MetaMask_Setup03.png" />
                                4. Select 'Rinkeby Network'
                            </figure>
                        </div>
                    </div>
                    <h3>4. Request Ethereum Tokens</h3>
                    <p>In order to vote on DeVoS, you require some of the networks native Tokens - Ethereum.</p>
                    <p>For the Rinkeby network, you can use one of the following faucets:</p>
                        <dd>The Chainlink-Faucet: <a href="https://faucets.chain.link/">https://faucets.chain.link/</a></dd>
                        <dd>The Alchemy-Faucet: <a href="https://rinkebyfaucet.com/">https://rinkebyfaucet.com/</a></dd>
                    <h3>5. Use the DeVoS-System</h3>
                    <p>After receiving some Ethereum on the Rinkeby network, you can freely route through the webpage and commence voting.</p>
                </section>
            </div>
        </div >
    )
}

export default Help;