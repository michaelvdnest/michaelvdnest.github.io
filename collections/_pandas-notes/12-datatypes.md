---
title: "Data Types"
permalink: /pandas-notes/datatypes/
excerpt: "Specifying column data types."
last_modified_at: 2021-01-27
toc: true
---

pandas uses NumPy arrays and dtypes for Series or individual columns of a DataFrame. pandas and third-party libraries extend NumPy’s type system in a few places.

By default integer types are int64, float types are float64 and string types are object. 

## Data Type Info

Use the `dtypes` attribute to display the data type of each column in a `DataFrame`.

<iframe src="/assets/notebooks/datatypes-info.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Change Data Types

When reading in data the default types of `object`, `float64` and `int64` are applied to columns. The
column data types can be specified in various ways.

<iframe src="/assets/notebooks/datatypes-readdata.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Memory Usage

Changes the data types of columns of a `DataFrame` can drastically reduce its memory usage.

<iframe src="/assets/notebooks/datatypes-readdata-mem.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## Date

pandas has created a tremendous amount of functionality for manipulating time series data.

### Date time

 Date times are specific dates and times with timezone support.

<iframe src="/assets/notebooks/datatypes-datetime.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

### Time delta

Time deltas are an absolute time duration.

<iframe src="/assets/notebooks/datatypes-timedelta.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

### Read Date Column Performance 

Compare different ways of converting to timestamps.

<iframe src="/assets/notebooks/datatypes-datetime-perf.html" frameBorder="0" width="100%" height="100%"
  scrolling="no" onload="resizeIframe(this)"></iframe>

## pandas Data Types

The following table contains some of the pandas data types with some notes on each type.

| String Alias    | Note                                                                              | Size | Alias  | Types                                                |
|:----------------|:----------------------------------------------------------------------------------|:-----|:-------|:-----------------------------------------------------|
| bool            | True or False                                                                     | 8    |        | bool, np.bool                                        |
| int64           | [-9,223,372,036,854,775,808, 9,223,372,036,854,775,807). Default for integers.    | 64   | long   | int, np.int64                                        |
| float64         | Double precision float: sign bit, 11 bits exponent, 52 bits mantissa. Default for | 64   | double | float, np.float64                                    |
| object          | Can hold any Python object. Default for string data.                              |      | str    | object, str, np.object_                              |
| string          | Stores text data.                                                                 |      |        | str, pd.StringDtype                                  |
| timedelta64[ns] | Represents a duration, the difference between two dates or times.                 |      |        | datetime.timedelta, np.timedelta64, pd.Timedelta     |
| datetime64[ns]  | A specific date and time with timezone support.                                   |      |        | datetime.datetime, np.datetime64, pd.DatetimeTZDtype |
| category        | Useful for object columns with relatively few unique values.                      |      |        | pd.Categorical                                       |

| int8            | [-128, 128]                                                                       | 8    | byte       | np.int8                                              |
| uint8           | [0, 255]                                                                          | 8    | ubyte      | np.uint8                                             |
| int16           | [-32,768, 32,767]                                                                 | 16   | short      | np.int16                                             |
| uint16          | [0, 65,535]                                                                       | 16   | ushort     | np.uint16                                            |
| int32           | [-2,147,483,648, 2,147,483,647]                                                   | 32   |            | np.int32                                             |
| uint32          | [0, 4,294,967,295]                                                                | 32   |            | np.uint32                                            |
| uint64          | [0, +18,446,744,073,709,551,615]                                                  | 64   | uint       | np.uint64                                            |
| float16         | Half precision float: sign bit, 5 bits exponent, 10 bits mantissa                 | 16   | half       | np.float16                                           |
| float32         | Single precision float: sign bit, 8 bits exponent, 23 bits mantissa               | 32   | single     | np.float32                                           |
| float128        | Extended precision float: sign bit, 15 bits exponent, 112 bits mantissa.          | 128  | longfloat  | np.float128                                          |
| complex64       | Two 32-bit floats (real and imaginary components).                                | 64   | csingle    | np.complex64                                         |
| complex128      | Two 64-bit floats (real and imaginary components).                                | 128  | cfloat     | complex, np.complex128                               |
| complex256      | Two 128-bit floats (real and imaginary components).                               | 256  | clongfloat | np.complex256                                        |
| bytes           | An array of bytes.                                                                |      |            | np.bytes_                                            |

## See Also

* [dtypes](https://pandas.pydata.org/pandas-docs/stable/user_guide/basics.html#basics-dtypes) in the [pandas User Guide]
* [object convertsion](https://pandas.pydata.org/pandas-docs/stable/user_guide/basics.html#basics-object-conversion) in the [pandas User Guide]
* [Time deltas](https://pandas.pydata.org/pandas-docs/stable/user_guide/timedeltas.html) in the [pandas User Guide].

[pandas User Guide]: https://pandas.pydata.org/docs/user_guide/index.html