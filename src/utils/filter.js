Array.prototype.getFilteredJobData = function (filters) {
  return this.filter((job) => {
    if (filters.minExp && filters.minExp > 0 && job.maxExp < filters.minExp) {
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
      filters.location != "any" &&
      !job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      filters.location != "onsite" &&
      filters.location != "hybrid"
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
      filters.minBasePay &&
      job.maxJdSalary < parseFloat(filters.minBasePay)
    ) {
      return false;
    }
    return true;
  });
};

// Export the custom function
export default Array.prototype.getFilteredJobData;
