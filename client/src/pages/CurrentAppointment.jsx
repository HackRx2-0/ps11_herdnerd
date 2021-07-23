import React from "react";
import { Card, Avatar, Button } from "antd";
import "../css/CurrentAppointment.css";
import OtherDocCard from "../components/OtherDocCard";
const { Meta } = Card;

const CurrentAppointment = () => {
	const ab = "unavailable";
	return (
		<div>
			<Card
				className="Appointment-card"
				hoverable
				// style={{ width: 300, marginTop: 16 }}
			>
				<Meta
					avatar={
						<Avatar
							style={{
								width: "100px",
								height: "100px",
								marginTop: "20px",
								marginLeft: "20px",
							}}
							src="https://images.squarespace-cdn.com/content/v1/5213f93be4b08fcef374a832/1565822183890-I3GTCYUIGFGDQM9H0J04/DSCF7758.JPG"
						></Avatar>
					}
					title="Dr Amy Santiago"
					description="Dermatologist"
				/>
				<p>{ab}</p>
				<p>Sunday, 5th August 2021</p>
				<p>1:30pm - 2:00pm</p>
				{ab === "available" ? (
					<>
						<button>Chat Now</button>
						<button>Cancel</button>
					</>
				) : (
					<>
						<Button className="buttonCurrent">Cancel Appointment</Button>
					</>
				)}
			</Card>
			<OtherDocCard />
		</div>
	);
};

export default CurrentAppointment;
