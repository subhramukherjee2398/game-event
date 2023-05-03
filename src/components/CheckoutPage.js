import React, { useEffect, useState } from "react";
import { DateTimePicker, MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [setuptime, setSettimeup] = useState("");
  const [eventDuration, setEventDuration] = useState("");
  const [transPrice, setTransPrice] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchasItem, setPurchasItem] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("purchas"));
    setPurchasItem(items);
    let totalPrice = items.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
    setTotalPrice(totalPrice);
    console.warn(totalPrice);
  }, []);

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

  const handleChangePay = (event) => {
    console.log(event.target.value);
    setPaymentOption(event.target.value);
  };

  const PayemntData = () => {
    let paymentData = {
      event_start: new Date(eventStart).toLocaleDateString(),
      event_end: new Date(eventEnd).toLocaleDateString(),
      setuptime: new Date(setuptime).toLocaleDateString(),
      eventDuration,
      transportPrice: transPrice,
      paymentOption,
    };

    console.table(paymentData);
  };

  return (
    <div className="event-conatiner">
      <h4 style={{ color: "#BFDB38" }}>
        {eventDuration !== "" &&
          eventStart !== "" &&
          eventEnd !== "" &&
          eventDuration}
      </h4>
      <h4>Event Timimg</h4>
      <section className="eventDates">
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDateTimePicker
              label="Event Start Time"
              value={eventStart}
              onChange={(newValue) => {
                setEventStart(newValue?.toISOString());
              }}
            />
          </LocalizationProvider>
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDateTimePicker
              value={eventEnd}
              label="Event End Time"
              minDateTime={dayjs(customEventEnd(eventStart))}
              onChange={(newValue) => {
                setEventEnd(newValue?.toISOString());
              }}
            />
          </LocalizationProvider>
        </div>
      </section>
      {eventStart !== "" && eventEnd !== "" && (
        <>
          <h4>Set Up Timimg</h4>
          <section className="setupContainer">
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDateTimePicker
                  value={setuptime}
                  label="Set time"
                  minDateTime={dayjs(eventStart)}
                  maxDateTime={dayjs(eventEnd)}
                  onChange={(newValue) => {
                    setSettimeup(newValue?.toISOString());
                  }}
                />
              </LocalizationProvider>
            </div>
          </section>
        </>
      )}

      <h4>Choose Your Location</h4>
      <section className="userloc">
        <div>
          <select
            value={selectedOption}
            onChange={handleChange}
            className="dis"
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.Id} value={option.Distance}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      <h4>Choose payment option</h4>
      <section className="payment">
        <select name="pay" id="pay" className="pay" onChange={handleChangePay}>
          <option value="">Select payment option</option>
          <option value="UPI">UPI</option>
          <option value="COD">COD</option>
          <option value="Cheque">Cheque</option>
          <option value="Others">Others</option>
        </select>
      </section>

      <section className="shipping">
        {transPrice > 0 && (
          <h4>Shipping Cost(Transport Cost) : {transPrice}</h4>
        )}
      </section>

      <section className="paybtn">
        <button onClick={() => PayemntData()}>
          Pay ${totalPrice} ({purchasItem.length} item )
        </button>
      </section>

      <section className="paybtn">
        <button
          style={{ backgroundColor: "lightgray", color: "black" }}
          onClick={() => navigate("/gamelist")}
        >
          Back to Games
        </button>
      </section>

      {/* {console.log(transPrice)}
      <div>Transport Price - {transPrice}</div> */}
    </div>
  );
};

export default CheckoutPage;
