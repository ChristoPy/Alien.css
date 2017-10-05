/*
					Alien.js


	Copyright 2017 Christopher Ribeiro

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	 http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

// Start Alien.css when the window load;
window.onload = function () {

	// Create an AJAX object;
	var AJAX = new XMLHttpRequest ();

	// Set the type to JSON;
	AJAX.overrideMimeType ("application/json");

	// Make the connection picking the AlienConfig.json;
	AJAX.open ("GET", "AlienConfig.json", true);


	// Add a callback to run when the AJAX's state change;
	AJAX.onreadystatechange = function () {

		// Parse the AlienConfig.json and add the especified stylesheets;
		if (AJAX.readyState == 4 && AJAX.status == "200") {

			// Get the JSON file;
			var AlienConfig = JSON.parse (AJAX.responseText);

			// Get the head of the HTML document;
			var Head = document.getElementsByTagName ("head")[0];


			// If the path to Alien.css is set in the AlienConfig file, add the especified stylesheets;
			if (AlienConfig["AlienPath"]) {

				// Pick the path in the ALienConfig;
				var AlienPath = AlienConfig["AlienPath"];

				// Create the Alien.css element setting the needed informations;
				var CSS = document.createElement ("link");
				CSS.rel = "stylesheet";
				CSS.type = "text/css";
				// Set the location of the Alien.css using the AlienPath;
				CSS.href = AlienPath + "Alien.css";

				// Insert it in the head of the document;
				Head.appendChild (CSS);


				// If gonna use the AlienAnimations.css add it to the head of the document;
				if (AlienConfig["AlienAnimations"]) {

					// Create the AlienAnimations.css element setting the needed informations;
					var CSS = document.createElement ("link");
					CSS.rel = "stylesheet";
					CSS.type = "text/css";
					// Set the location of the AlienAnimations.css using the AlienPath;
					CSS.href = AlienPath + "AlienAnimations.css";

					// Insert it in the head of the document;
					Head.appendChild (CSS);
				}

				// If gonna use the AlienButtons.css add it to the head of the document;
				if (AlienConfig["AlienButtons"]) {

					// Create the AlienButtons.css element setting the needed informations;
					var CSS = document.createElement ("link");
					CSS.rel = "stylesheet";
					CSS.type = "text/css";
					// Set the location of the AlienButtons.css using the AlienPath;
					CSS.href = AlienPath + "AlienButtons.css";

					// Insert it in the head of the document;
					Head.appendChild (CSS);
				}

				// If gonna use the AlienMisc.css add it to the head of the document;
				if (AlienConfig["AlienMisc"]) {
					// Create the AlienMisc.css element setting the needed informations;
					var CSS = document.createElement ("link");
					CSS.rel = "stylesheet";
					CSS.type = "text/css";
					// Set the location of the AlienMisc.css using the AlienPath;
					CSS.href = AlienPath + "AlienMisc.css";

					// Insert it in the head of the document;
					Head.appendChild (CSS);
				}

				// If gonna use the AlienPositions.css add it to the head of the document;
				if (AlienConfig["AlienPositions"]) {
					// Create the AlienPositions.css element setting the needed informations;
					var CSS = document.createElement ("link");
					CSS.rel = "stylesheet";
					CSS.type = "text/css";
					// Set the location of the AlienPositions.css using the AlienPath;
					CSS.href = AlienPath + "AlienPositions.css";

					// Insert it in the head of the document;
					Head.appendChild (CSS);
				}
			}
		}
	};

	// Send the AJAX request;
	AJAX.send (null);
}
