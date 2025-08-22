📘 Notes for App.jsx
❓ Doubts Asked

Error handling

Mistake: else block syntax issue → fixed later with Copilot.

Question: Why 404 error appears → because API returns city not found.

Console logs

Needed to check if API was returning the right fields (weather.main, sys, etc.).

Tailwind classes

absolute top-0 left-0 w-full h-full object-cover → stretches video background.

z-10 → keeps weather card above video overlay.

z-1 → overlay dim layer behind card but above video.

Loading & error

Added {loading && ...}, {error && ...} for UX.

✅ Key Learnings

API call done with axios using async/await.

State management via useState.

Handled loading, error, and weather separately.

Tailwind layering (z-index) keeps UI elements stacked properly.

📘 Notes for WeatherCard.jsx
❓ Doubts Asked

Unfinished parts

Initially only humidity shown → later added wind, pressure, feels like.

Pressure confusion

Couldn’t find pressure in console → realized it was inside weather.main.pressure.

Technical term = API response structure (JSON fields).

Tailwind classes

grid grid-cols-2 gap-4 → two-column stats layout.

text-gray-400, font-bold → styling details.

Icon

<img src="http://openweathermap.org/img/wn/..."/> → correct API link for icons.

✅ Key Learnings

Data comes directly from API JSON:

weather.main.temp → temperature.

weather.main.feels_like → feels like.

weather.wind.speed → wind.

weather.main.pressure → pressure.

Tailwind grid system used for clean stats display.

📘 Notes for SearchBar.jsx
❓ Doubts Asked

Form handling

Question about preventDefault() → prevents page reload.

Why city.trim() → avoids empty spaces issue.

Resetting input

After search → setCity("").

✅ Key Learnings

Controlled input with value={city} + onChange.

Parent-child communication: fetchWeather passed from App.jsx.

Button styles use Tailwind with hover effect.

🔗 Connectivity Notes

App.jsx

Core file: manages states (weather, loading, error) + API fetch.

Passes fetchWeather → SearchBar.

Passes weather → WeatherCard.

SearchBar.jsx

Takes user input city → calls fetchWeather(city) from parent.

WeatherCard.jsx

Displays weather data passed down from App state.

Flow:
User types city → SearchBar calls fetchWeather → App.jsx fetches API → sets weather → passes data to WeatherCard → UI shows weather details.