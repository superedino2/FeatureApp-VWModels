# FeatureApp-VWModels

The template that we use for building new FeatureApps is located in GIT/FeatureApps/FeatureApp-VWModels . During the development the app functions as any Angular application. 

The FeatureHub specific files are located in feature-hub/ folder and don't really need to be modified when making changes or creating a new app by copying this one. The simplified takeaway is that the file feature-hub/feature-app.js wraps the Angular application and runs it as a FeatureApp. If angular application name is changed (our template application is called vw-models) feature-app.js needs to be updated. Any input parameters to the Angular app are also sent via feature-app.js, the example we use in our template is a parameter called "selectedModel".  

# Build and Run

1. Build for local development:
"npm run build"
This will also remove any previously build dist/ folder.

2. Run app in FeautureApp mode:
"npm run start"
This will run the code in dist/ built with the build script in Step 1.

3. Run app as normal Angular application:
"npm run serveAngular"
This is good to use during development since the app behaves as regular Angular application, with hot reloads etc...

4. Build for production
"npm run buildProd"
This builds the production version of the app and places the files, including feature-app.umd.js, in the dist/ folder. This step functions on top of the local build so it requires the build in Step 1 to run before. 

# Deploy
VW has a procedure for deployment, best is to contact Ruben, Ruben.Svartholm@volkswagen.se , and set a standard procedure for deployments. Last time Edin and Ruben used Edin's personal Github account to push the files to and Ruben did some magic on VW side in order to load the files and get the application working on VW's site.