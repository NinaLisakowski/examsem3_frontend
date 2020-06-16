import React, { useState, useEffect } from "react";
import URLS from "./Settings";
import "./App.css";

export function Search() {
	const [allRecipes, setAllRecipes] = useState([]);

	const URL = URLS.AllRecipes();

	function fetchAllRecipes() {
		let options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch(URL, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAllRecipes(data);
			});
	}

	useEffect(() => {
		fetchAllRecipes();
	}, []);

	return (
		<div align="center">
			<h1>All recipes</h1>
			<table border="3">
				<thead>
					<tr>
						<th>ID</th>
						<th>Preparation Time</th>
						<th>Directions</th>
						<th>Week Menu Plans</th>
						<th>Ingredients</th>
					</tr>
				</thead>
				<tbody>
					{allRecipes.map((recipe) => {
						return (
							<tr key={recipe.recipeId}>
								<td>{recipe.recipeId}</td>
								<td>{recipe.preparationTime}</td>
								<td>{recipe.directions}</td>
								<td>{recipe.weekMenuPlans}</td>
								<td>{recipe.ingredients}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
