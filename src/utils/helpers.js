//return all of the recipes along with their titles and ingredients.
export function getRecipes () {
  const recipesStored = localStorage.getItem('recipes')
  return recipesStored === null
    ? setinitialDate()
    : JSON.parse(recipesStored)
  }

  export function removeRecipe (recipe) {
    const recipesStored = JSON.parse(localStorage.getItem('recipes'))
    delete recipesStored[recipe]
    localStorage.setItem('recipes', JSON.stringify(recipesStored))
    }

  export function addRecipe (title, ingredients) {
    const recipesStored = JSON.parse(localStorage.getItem('recipes'))
    const newData = {
      [title]:
      {
        title:title,
        ingredients: ingredients
      }
    }

    Object.assign(recipesStored,newData);
    localStorage.setItem('recipes', JSON.stringify(recipesStored))
    }

function setinitialDate () {

  const initialData = {
    Spaghetti:{
        title:'Spaghetti',
        ingredients:['Noodles','Tomato Sauce', '(Optional) Meatballs'],
      },
    'Pumpkin Pie': {
      title:'Pumpkin Pie',
      ingredients:['Pumpkin Puree','Sweetened Condensed Milk', 'Eggs'],
    },
  }

  localStorage.setItem('recipes', JSON.stringify(initialData))

  return initialData
}
