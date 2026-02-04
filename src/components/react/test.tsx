import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
	{ name: "Mon", value: 400 },
	{ name: "Tue", value: 300 },
	{ name: "Wed", value: 500 },
	{ name: "Thu", value: 200 },
	{ name: "Fri", value: 600 },
];

export default function SimpleChart() {
	return (
		<div style={{ width: "100%", height: 300 }}>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Line dataKey="value" stroke="#8884d8" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
