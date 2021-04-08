var store = [{
        "title": "Useful pandas Recipes",
        "excerpt":"This is my collection of useful pandas recipes. Recipes by category Select Data Choose Columns Choose Rows Top and Bottom Rows Range of Rows Filter Rows Duplicates Missing Data Sorting Transform Split Column By Delimiter By Number of Characters By Positions By Lowercase to Uppercase By Uppercase to Lowercase By...","categories": [],
        "tags": [],
        "url": "/pandas-notes/useful-recipes/",
        "teaser": null
      },{
        "title": "Dataframe Components",
        "excerpt":"The main components of a DataFrame are the index (row labels), columns (column labels) and data.      Each of the components is a NumPy ndarray.   &lt;/iframe  ","categories": [],
        "tags": [],
        "url": "/pandas-notes/dataframe-components/",
        "teaser": null
      },{
        "title": "Creating Dataframes",
        "excerpt":"Read Csv   Read a csv file into a DataFrame.     See also      pandas.read_csv   Create Dataframe            ","categories": [],
        "tags": [],
        "url": "/pandas-notes/creating-dataframes/",
        "teaser": null
      },{
        "title": "Choose Columns",
        "excerpt":"Select a subset of the dataset.      Indexing operator   Choose columns with the indexing operator.     Methods   Choose columns with methods.     See also      Refer to Indexing and selecting data in the pandas User Guide.  ","categories": [],
        "tags": [],
        "url": "/pandas-notes/choose-columns/",
        "teaser": "/assets/images/choose-cols.png"
      },{
        "title": "Choose Rows",
        "excerpt":"Select rows in the dataset. Top and Bottom Rows Return the first or last n rows. Range of Rows Return a range of rows from the dataset. The indexers .loc and .iloc have the ability to select data from the dataset by label and location respectively. See also pandas.DataFrame.loc pandas.DataFrame.iloc...","categories": [],
        "tags": [],
        "url": "/pandas-notes/choose-rows/",
        "teaser": "/assets/images/choose-rows.png"
      },{
        "title": "Missing Data",
        "excerpt":"pandas uses the value nan to represent missing data.   &lt;/iframe  ## See also  * [Missing data](https://pandas.pydata.org/docs/user_guide/10min.html#missing-data)   in [10 minutes to pandas](https://pandas.pydata.org/docs/user_guide/10min.html). * [Working with missing data](https://pandas.pydata.org/docs/user_guide/missing_data.html)   in the [pandas User Guide](https://pandas.pydata.org/docs/user_guide/index.html).  ","categories": [],
        "tags": [],
        "url": "/pandas-notes/missing-data/",
        "teaser": null
      },{
        "title": "Sorting",
        "excerpt":"Sorting pandas DataFrames by value and index.   Sort by values   Sort a DataFrame by the values.     Sort by index   Sort a DataFrame by the index.     See also      Sorting and order in pandas User Guide.   Sorting a MultiIndex in pandas User Guide.   pandas.DataFrame.sort_values   pandas.DataFrame.sort_index   pandas.DataFrame.reset_index   ","categories": [],
        "tags": [],
        "url": "/pandas-notes/sorting/",
        "teaser": null
      },{
        "title": "Concatenation",
        "excerpt":"Append rows and columns of DataFrames.   Rows   Combine DataFrames vertically.   pd.concat([df1, df2])        Columns   Combine DataFrames horizontally.   pd.concat([df1, df2], axis=1)        See also      Concatenating objects  ","categories": [],
        "tags": [],
        "url": "/pandas-notes/concat/",
        "teaser": null
      },{
        "title": "Merging",
        "excerpt":"Merge DataFrame or named Series objects with a database-style join. The join is done on columns or indexes. Inner Join Inner join produces a data set that includes rows from the left table which have matching rows from the right table. Left Join Left join produces a dataset that includes...","categories": [],
        "tags": [],
        "url": "/pandas-notes/merge/",
        "teaser": null
      },{
        "title": "Summarize",
        "excerpt":"Summarize data in a dataset.   Dimensions     Summary Stats     Info    ","categories": [],
        "tags": [],
        "url": "/pandas-notes/summarize/",
        "teaser": null
      },{
        "title": "Group Data",
        "excerpt":"Groups rows that have the same values into summary rows. The following operations can be applied to groups. Aggregation: Compute a summary statistic about each group. Transformation: Perform some group-specific computations and return a like-indexed. Filtration: Discard data with some condition. Split into groups Aggregatikon Compute a summary statistic about...","categories": [],
        "tags": [],
        "url": "/pandas-notes/groupby/",
        "teaser": null
      },{
        "title": "Data Types",
        "excerpt":"pandas uses NumPy arrays and dtypes for Series or individual columns of a DataFrame. pandas and third-party libraries extend NumPy’s type system in a few places. By default integer types are int64, float types are float64 and string types are object. Data Type Info Use the dtypes attribute to display...","categories": [],
        "tags": [],
        "url": "/pandas-notes/datatypes/",
        "teaser": null
      },{
        "title": "Headers",
        "excerpt":"CSV Header Row Select the rows to skip and which row to use for the column names with the skiprows and header parameters of read_csv. Working with column headers. First Row as Headers Promotes the first row of values as the new column headers. Headers as First Row Demotes the...","categories": [],
        "tags": [],
        "url": "/pandas-notes/headers/",
        "teaser": null
      },{
        "title": "Reverse Rows",
        "excerpt":"Use an iloc slice to reverse the rows in a dataset.    ","categories": [],
        "tags": [],
        "url": "/pandas-notes/reverse/",
        "teaser": null
      },{
        "title": "Transpose",
        "excerpt":"Transpose a DataFrame by using the transpose method or the T attribute.    ","categories": [],
        "tags": [],
        "url": "/pandas-notes/transpose/",
        "teaser": null
      },{
        "title": "Rename",
        "excerpt":"A common operation on a DataFrame is to rename row or column names. On this page, some of the ways pandas renames rows and columns are covered. Set the columns attribute to a list of column names. Use the rename method to rename specific rows and columns. Use the set_axis...","categories": [],
        "tags": [],
        "url": "/pandas-notes/rename/",
        "teaser": null
      },{
        "title": "Replace",
        "excerpt":"There are multiple ways to replace values in a dataset. Replace in a Column Replace values in a single column. Replace in Specific Columns Replace values in specific columns. Replace in All Columns Replace values all columns. Replace meeting a Condition. Replace values that meet a condition. Fill Replacement Values...","categories": [],
        "tags": [],
        "url": "/pandas-notes/replace/",
        "teaser": null
      },{
        "title": "Replace Missing Values",
        "excerpt":"The fillna method can “fill in” NA values with non-NA data.    ","categories": [],
        "tags": [],
        "url": "/pandas-notes/replace-missing/",
        "teaser": null
      },{
        "title": "Reshape Data",
        "excerpt":"Melt   Gather columns into rows.        Pivot   Spread rows into columns.        See also      Reshape the layout of tables   Reshaping and pivot tables   Cookbook Pivot   Tidy Data  ","categories": [],
        "tags": [],
        "url": "/pandas-notes/reshape/",
        "teaser": null
      },{
        "title": "Tidy Data",
        "excerpt":"Columns containing values, not variables In the pew dataset column headers are values and not variable names. Columns containing multiple variables In the tuberculosis (TB) dataset columns contain multiple values: sex and age. Variables in both rows and columns In the weather dataset variables are stored in individual columns (id,...","categories": [],
        "tags": [],
        "url": "/pandas-notes/tidy-data/",
        "teaser": null
      },{
        "title": "Welcome to Jekyll!",
        "excerpt":"You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when...","categories": ["jekyll","update"],
        "tags": ["jekyll","post"],
        "url": "/jekyll/update/welcome-to-jekyll/",
        "teaser": null
      },{
        "title": "Minimal Mistakes Theme",
        "excerpt":"This site has been created using the Minimal Mistakes Jekyll theme.   Minimal Mistakes has been developed as a Gem-based theme for easier use, and 100% compatible with GitHub Pages when used as a remote theme.   Check out the Minimal Mistakes Quick Start Guide for more info.   ","categories": ["jekyll","theme"],
        "tags": ["jekyll","theme","minimal-mistakes"],
        "url": "/jekyll/theme/minimal-mistakes/",
        "teaser": null
      },{
        "title": "Embed Jupyter Notebooks in Jekyll",
        "excerpt":"It is possible to embed Jupyter notebooks into a post. Step 1: Create a js script file in assets/js/ containing the following function. function resizeIframe(obj) { obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 50 + 'px'; } Step 2: Add the script file to the head_scripts array in _config.yml. head_scripts: - /assets/js/notebook-script.js Step...","categories": ["jupyter"],
        "tags": ["post","jupyter"],
        "url": "/jupyter/embed-notebooks/",
        "teaser": null
      },{
        "title": "Python Virtual Environments",
        "excerpt":"I’m using virtualenvwrapper to help manage my virtual environments in python. The main reasons I’m using virtualenvwrapper is because of the following features: Organize all of your virtual environments in one place. Has wrappers for managing your virtual environments (create, delete, copy). Use a single command to switch between environments....","categories": ["python"],
        "tags": ["python"],
        "url": "/python/python-virtualenv/",
        "teaser": null
      }]
