Array.prototype.getFilteredJobData = function(filters) {
  console.log("func",filters)
    return this.filter((job) => {
      if (filters.minExp && job.maxExp < filters.minExp) {
        return false;
      }
      if (
        filters.companyName &&
        !job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.location &&
        !job.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.remote &&
        filters.remote !== "" &&
        job.remote !== filters.remote
      ) {
        return false;
      }
      if (
        filters.jobRole &&
        !job.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase())
      ) {
        return false;
      }
      if (
        filters.minJdSalary &&
        job.maxJdSalary < parseFloat(filters.minJdSalary)
      ) {
        return false;
      }
      return true;
    });
  };
  
  // Export the custom function
  export default Array.prototype.getFilteredJobData;