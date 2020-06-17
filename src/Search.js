import React, { useState, useEffect } from "react";
import URLS from "./Settings";
import "./App.css";

export function Search() {
	const [allRecipes, setAllRecipes] = useState([]);
	const [searchpreparationTime, setSearchpreparationTime] = useState("");

	function fetchAllRecipes() {
		let options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch(URLS.AllRecipes(), options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAllRecipes(data);
			});
	}

	useEffect(() => {
		fetchAllRecipes();
	}, []);

	function fetchWithPreparationTime() {
		let options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch(URLS.SearchRecipes() + "/" + searchpreparationTime, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAllRecipes(data);
				setSearchpreparationTime("");
			});
	}

	function preparationTimeChangeHandler(event) {
		let s = event.target.value;
		console.log(s);
		setSearchpreparationTime(s);
	}

	return (
		<div align="center">
			<h1>All recipes</h1>
			<button onClick={fetchAllRecipes}>Get all recipes</button>
			<p>
				Search for a recipe here:
				<input
					type="text"
					placeholder="Preparation Time"
					value={searchpreparationTime}
					onChange={preparationTimeChangeHandler}
				></input>
				<button onClick={fetchWithPreparationTime}>Search</button>
			</p>
			{allRecipes && allRecipes.length > 0 ? (
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
			) : (
				"No Recipes Found"
			)}
		</div>
	);
}
