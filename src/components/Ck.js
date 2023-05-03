import React, { useEffect, useState } from "react";
import { DateTimePicker, MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Select from "react-dropdown-select";

const Ck = () => {
    const [eventStart, setEventStart] = useState("");
    const [eventEnd, setEventEnd] = useState("");
    const [setuptime, setSettimeup] = useState("");
    const [eventDuration, setEventDuration] = useState("");
    const [transPrice, setTransPrice] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
  
    useEffect(() => {
      const isoDateString1 = eventStart;
      const isoDateString2 = eventEnd;
  
      const date1 = new Date(isoDateString1);
      const date2 = new Date(isoDateString2);
  
      const timeDiffInMs = date2.getTime() - date1.getTime();
      const timeDiffInHours = timeDiffInMs / (1000 * 60 * 60);
  
      const days = Math.floor(timeDiffInHours / 24);
      const remainingHours = timeDiffInHours % 24;
      setEventDuration(
        `Remaining ${days} days and ${Math.floor(remainingHours)} hours.`
      );
      console.log(
        `${timeDiffInHours} hours is equivalent to ${days} days and ${remainingHours} hours.`
      );
    }, [eventStart, eventEnd]);
  
    const customEventEnd = (time) => {
      if (time) {
        const date = new Date(time);
        date.setHours(date.getHours() + 2);
        const extratwohours = date.toISOString();
        return extratwohours;
      }
    };
  
    /*   const MaxcustomSetupTime = (time) =>{
        if(time){
            const date = new Date(time);
            date.setHours(date.getHours() + 24);
            const extraOnedays = date.toISOString();
            return extraOnedays;
        }
      } */
  
    const options = [
      {
        Id: 1,
        name: "Baghajatin, Kolkata, WB",
        Distance: "10km",
      },
      {
        Id: 2,
        name: "Garia, Kolkata, WB",
        Distance: "40km",
      },
      {
        Id: 3,
        name: "Sealdaha, Kolkata, WB",
        Distance: "15km",
      },
  
      {
        Id: 4,
        name: "Jadavpur, Kolkata, WB",
        Distance: "25km",
      },
    ];
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
      // console.log(event.target.value.replace("km",""))
      calculateTransportCharge(event.target.value.replace("km", ""));
    };
  
    const calculateTransportCharge = (distance, baseCharge = 1500) => {
      if (distance <= 30) {
        setTransPrice(baseCharge);
      } else {
        const extraKm = distance - 30;
        const perKmCharge = 50;
        const excessCharge = extraKm * perKmCharge;
        const totalCharge = baseCharge + excessCharge;
        console.warn({ totalCharge });
        setTransPrice(totalCharge);
      }
    };
  return (
    <div>
    
     
    
    </div>
  );
};

export default Ck;
