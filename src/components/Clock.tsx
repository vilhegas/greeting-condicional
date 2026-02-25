const  getTime = () => {
    return new Intl.DateTimeFormat ( 'pt-BR', {timeStyle: 'short', hour12: false}).format();}

const getGreeting = () => {
  const hour = new Date().getHours();
    if( hour < 12) 
        return "Bom dia";
    else if (hour < 18  ) {
        return "Boa tarde";
    } else {
        return "Boa noite"
    }
}

export const  Clock = () => {

    return ( 
        <>
            <ul>
                <li className="text-7xl font-bold">{getTime()}</li>
                <li className="text-2xl">{getGreeting()}</li>
            </ul>
        </>
     );
}