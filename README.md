## Landing Page

City Widgets:

- Responsiveness: Widgets should adapt to screen sizes, maintaining design integrity across devices.
  🟢 The widgets will adapt to all the screen sizes
- Data Source: Employ mock data to represent city metrics for demonstration purposes.
  🟢 Mock data of multiple cities is used along with Forecase sales and accuracy.
- Overflow Handling: Present a scrollbar within the widget area if more than six widgets are displayed, allowing users to scroll through the list without affecting the rest of the page layout.
  🟢 The widgets are scrollable vertically and horizotally based on the layout preference of the user
- Alignment Customization: Widgets must be aligned according to configuration settings, with options for right,left, top, and bottom placement on the screen.
  🟢 User can customize the widget layout as mentioned
- Interactivity: Each widget includes a miniature line chart, which should display a tooltip bullet with detailed information when hovered over by the cursor.
  🟢 The widget contains miniature line chart which show comparision between the historic and forecasted values. (Refer Mock Data folder in the code for more information)
- Navigation: Clicking on a widget should redirect the user to a detailed information page, which is the second page of the application.
  🟢 User can navigate to the details page by clicking the name and the details button given on the widget. Aditionally there is a button to navigate to the given city in realtime in map.

Map background:

- Interactivity & Navigation: The map should be a functional UI element, allowing users to zoom and scroll.
  🟢 Map is scrollable and user can zoom into it.
- Geographic Points: Feature a minimum of two cities on the world map as interactable points.
  🟢 The cities displayed in the widgets are marked on the map. User can navigate to that using the "Navigation Icon" given on the widget.
- Data Tooltip: When a user hovers over a city point, a tooltip should appear, providing the city’s name and current data metrics, sourced from mock data.
  🟢 This works in the application.
- Initial Animation: On the initial load of the dashboard, introduce the user to the map with a smooth zoom-in animation to attract attention and guide user engagement.
  🟢 The map is introduced with a smooth zoom-in animation, and a quick tour will be given to the user first time, after that it won't appear if reopened. but user can access that quick tour using the "Assistant Icon" given in the navbar.

## Details Page:

Sidebar Section

- Mock Data: Populate the sidebar stack cards with placeholder data to simulate user interaction.
  🟢 This is executed in the app.
- Functionality: The sidebar should be capable of being expanded or collapsed according to user preference.
  🟢 This is executed in the app.
- Navigation: Implement a back button that, when clicked, navigates the user to the landing page of the dashboard.
  🟢 User can click on the Logo to navigate to the Homepage
- Interactivity: Selecting a card from list in the sidebar updates the main content area, including: - The chart data and visualizations. - The header section above the chart. - The unique card ID associated with the selected dataset. - The data within the tabular display on the right side of the dashboard.
  🟢 This is executed in the app.

Chart Section:

- Data Representation: Display data in the chart based on the selection made in the sidebar. The chart is a visual representation of the data points detailed in the table below.
  🟢 This is executed in the app.
- Interactive Switches: Include switches that control the state of the chart lines; toggling a switch should show or hide corresponding lines in the chart.
  🟢 This is executed in the app.
- Data Scope: The chart illustrates consumption details, contrasting historical consumption with forecasts.
  🟢 This is executed in the app.
- Segmentation: - Historical: Show data from the past six quarters. - Forecast: Display the forecast for the next five quarters, including the current quarter, with predictions based on the current date. - Tooltip Details: On hover, tooltips should appear, providing detailed data for the respective quarter.
  🟢 This is executed in the app.

Table Section:

- Data Consistency: The table reflects the data chosen in the sidebar and should align with the chart's depiction.
  🟢 This is executed in the app.
- Layout: Present data across three rows for each of the twelve quarters shown in the chart.
  🟢 This is executed in the app.
