const selectActivityContainer = document.querySelector('.select-container');
const selectActivityInput = document.getElementById('select-activity');
const selectActivityMenu = document.querySelector('.select-activity__menu');


selectActivityInput.addEventListener('click', function(ev)
{
    selectActivityContainer.classList.toggle('expanded');
    updateOptions()
})

selectActivityMenu.addEventListener('click', function(ev)
{
    const value = ev.target.dataset.activity;
    if (value)
    {
        selectActivityInput.value = value
    }
    selectActivityContainer.classList.remove('expanded')
})

const selectActivityMenuOptions = document.querySelectorAll('.select-activity__menu_option');

function updateOptions()
{
    const currentValue = selectActivityInput.value
    selectActivityMenuOptions.forEach(option =>
    {
        if (currentValue === option.dataset.activity)
        {
            option.classList.add('option__checked')
        }
        else
        {
            option.classList.remove('option__checked')
        }
    })
}
