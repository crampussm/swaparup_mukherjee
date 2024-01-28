import React from 'react'

function Projects() {
  return (
    <div className='projects' id='projects'>
        <h1 className='heading' id='project-heading'>PROJECTS</h1>
        <div className="project-showcase">
            <div className="project-image">
                <img src="./images/ppw.png" alt="" width={"100%"} style={{cursor: "pointer"}}/>
            </div>
            <div  className="divider"></div>
            <div className="project-info">
                <h2 style={{fontSize: "2rem", color: "#50C594", margin: "2px 0px"}}>Portfolio website</h2>
                <p className='text' style={{margin: "35px 0px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam neque voluptatum, autem minus explicabo maiores voluptatibus amet ipsa facere rem adipisci quaerat quibusdam, illum accusantium dolorum repellendus dicta! Ipsa, adipisci!</p>
                <div style={{backgroundColor: "#8EA0BA", height: "1px", width: "100%"}}></div>
                <p className='text' style={{margin: "15px 0px"}}>React</p>
            </div>
        </div>
        <div className="project-showcase">
            <div className="project-info" style={{maxWidth: "498px"}} id='price-tracker-bot-pc-info'>
                <h2 style={{fontSize: "2rem", color: "#50C594", margin: "4px 0px"}}>pricetracker Bot</h2>
                <p className='text' style={{margin: "90px 0px"}}>Lorem lorem20 ipsum dolor sit, amet consectetur adipisicing elit. Quisquam neque voluptatum, autem minus explicabo maiores voluptatibus amet ipsa facere rem adipisci quaerat quibusdam, illum accusantium dolorum repellendus dicta! Ipsa, adipisci!</p>
                <div style={{backgroundColor: "#8EA0BA", height: "1px", width: "100%", marginTop: "150px"}}></div>
                <p className='text' style={{margin: "15px 0px"}}>Python</p>
            </div>
            <div  className="divider" style={{height: "450px"}}></div>
            <div className="project-image">
                <img src="./images/priceTracker_bot.png" alt="" width={"100%"} style={{cursor: "pointer"}}/>
            </div>
            <div className="project-info" id='price-tracker-bot-mobile-info'>
                <h2 style={{fontSize: "2rem", color: "#50C594", margin: "4px 0px"}}>pricetracker Bot</h2>
                <p className='text' style={{margin: "35px 0px"}}>Lorem lorem20 ipsum dolor sit, amet consectetur adipisicing elit. Quisquam neque voluptatum, autem minus explicabo maiores voluptatibus amet ipsa facere rem adipisci quaerat quibusdam, illum accusantium dolorum repellendus dicta! Ipsa, adipisci!</p>
                <div style={{backgroundColor: "#8EA0BA", height: "1px", width: "100%"}}></div>
                <p className='text' style={{margin: "15px 0px"}}>Python</p>
            </div>
        </div>
    </div>
  )
}

export default Projects