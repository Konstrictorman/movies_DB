import React from "react";
import ComboBox from "./ComboBox";
import MenuItem from "./MenuItem";

export const Menu = () => {
	const arr = [
		{
			id: 1,
			label: "RELEASE DATE",
		},
		{
			id: 2,
			label: "ALPHABETICALLY",
		},
	];

	return (
		<div className="menu_container">
			<MenuItem label="ALL" />
			<MenuItem label="DOCUMENTARY" />
			<MenuItem label="COMEDY" />
			<MenuItem label="HORROR" />
			<MenuItem label="CRIME" />

			<div className="menu_right menu_combo">
				<ComboBox label="SORT BY" options={arr} />
			</div>
		</div>
	);
};
