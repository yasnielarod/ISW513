import React, { Component } from "react";
import "./List.css";

function List2(props) {
	return (
		<div className="listConteiner">
			{props.generalList.length && (
				<ul className="listConteiner__ul">
					{props.generalList.map((itemList, index) => (
						<li key={index} className="listConteiner__li">
							{itemList}
							{/* <button onClick={() => removeItem(index)}>Remove Item</button> */}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default List2;
