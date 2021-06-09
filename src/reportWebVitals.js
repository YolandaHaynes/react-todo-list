//a function that measures the performance of the app
//other than that, not sure what each line represent.
// created a const of reportWebVitals with a function called onPerfEntry
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
//export is like 'return' for an api which returns this information to the reportWebVitals
export default reportWebVitals;
