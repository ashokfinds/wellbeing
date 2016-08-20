Template.activityTable.helpers({
  'activities': function () {
    // Get reference to template instance
    const instance = Template.instance();

    // Get resident activities
    const activities = instance.data.activities;

    const activitiesArray = [];

    activities.forEach(function (activity) {
      // Create temporary object to get Activity values
      const activityObject = {
        activityType: activity.activityType(),
        activityDate: activity.activityDate,
        duration: activity.duration
      };

      // Add Activity to activities list
      activitiesArray.push(activityObject);
    });

    return activitiesArray;
  },
  'tableSettings': function () {
    const activityTypeLabel = TAPi18n.__("residentActivityTable-activityTypeLabel");
    const durationLabel = TAPi18n.__("residentActivityTable-durationLabel");
    const activityDateLabel = TAPi18n.__("residentActivityTable-activityDateLabel");

    const tableSettings = {
      showFilter: false,
      fields: [
        {
          key: 'activityType',
          label: activityTypeLabel,
          sortOrder:1,
          sortDirection: 'ascending'
        },
        {
          key: 'duration',
          label: durationLabel,
        },
        {
          key: 'activityDate',
          label: activityDateLabel,
          tmpl: Template.dateCell,
          sortOrder: 0,
          sortDirection: 'descending'
        },
        {
          key: '_id',
          label: "",
          tmpl: Template.editResidentActivityButton,
        }
      ],
      filters: ['activityTypeFilter']
    };

    return tableSettings;
  }
});
