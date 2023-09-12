 export default function Friend({friend})
 {
    return(
        <div className="box">
            <h2>Name:{friend.name}</h2>
            <h4>Email:{friend.email}</h4>
        </div>
    )

 }