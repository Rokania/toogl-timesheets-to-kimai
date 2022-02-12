# toggl-timesheets-to-kimai

This script allows to transfer timesheets from Toggl Track to Kimai. The name of the project should be exactly the same in Toggl and Kimai.

## How to use it

### Env variables

To use the script you need to create a `.env` file containing all the env variables in the `.env.sample` file.

#### Toggl API key

To find the Toggl API key, go to `Profile setting` and then go to `API Token`.

#### Kimai API key

To find the Kimai API key, click on your profile in the upper right corner and then click on `Edit`. Create the new `API Password`.

### Launch the script 

To launch the script you just have to type 

``` bash
> npm i
> npm start
```

Then type the start date (format YYYY-MM-DD) and the end date (format YYYY-MM-DD).