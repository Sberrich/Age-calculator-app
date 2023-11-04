const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const yearRes = document.getElementById('years-res');
const dayRes = document.getElementById('days-res');
const monthRes = document.getElementById('months-res');
const showresult = document.getElementById('result');

showresult.addEventListener('click', () => {
    // Reset previous validation feedback
    day.classList.remove('border', 'border-red-500', 'text-red-500');
    month.classList.remove('border', 'border-red-500', 'text-red-500');
    year.classList.remove('border', 'border-red-500', 'text-red-500');


    // Validate day
    if (!day.value || day.value < 1 || day.value > 31) {
        day.classList.add('border', 'border-red-500', 'text-red-500');
    }

    // Validate month
    if (!month.value || month.value < 1 || month.value > 12) {
        month.classList.add('border', 'border-red-500', 'text-red-500');
    }

    // Validate year (assuming valid years are between 1900 and the current year)
    const currentYear = new Date().getFullYear();
    if (!year.value || year.value < 1900 || year.value > currentYear) {
        year.classList.add('border', 'border-red-500', 'text-red-500');
    }

    // You can add more logic here to show the results or other feedback to the user

    const inputDate = new Date(year.value, month.value - 1, day.value); // month is 0-indexed
    const currentDate = new Date();

    if (inputDate > currentDate) {
        alert('The provided date is in the future. ;-)');
        day.classList.add('border', 'border-red-500', 'text-red-500');
        month.classList.add('border', 'border-red-500', 'text-red-500');
        year.classList.add('border', 'border-red-500', 'text-red-500');
        
    }


    let yearsDifference = currentDate.getFullYear() - inputDate.getFullYear();
    let monthsDifference = currentDate.getMonth() - inputDate.getMonth();
    let daysDifference = currentDate.getDate() - inputDate.getDate();

    if (daysDifference < 0) {
        monthsDifference--;
        daysDifference += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (monthsDifference < 0) {
        yearsDifference--;
        monthsDifference += 12;
    }
 
    yearRes.textContent= yearsDifference;
    monthRes.textContent= monthsDifference;
    dayRes.textContent= daysDifference;
 
});
