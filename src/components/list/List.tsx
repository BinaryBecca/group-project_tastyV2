import type { ICategory } from "../../interfaces/ICategories"
import type { IMeal } from "../../interfaces/IMeals"
import CategoryCard from "../category-card/CategoryCard"
import MealsCard from "../meals-card/MealsCard"

interface ListProps {
  title: string
  type: "categories" | "meals"
  items: ICategory[] | IMeal[]
}

export default function List({ title, items, type = "meals" }: ListProps) {
  return (
    <section>
      <h2 className="font-poppins text-6xl text-primary mb-7.5">{title}</h2>
      <article className="grid grid-cols-3 gap-11.5">
        {items.length === 0 && <p>No items found.</p>}
        {items.length > 0 && type === "categories" && (
          <>
            {(items as ICategory[]).map((category) => {
              return (
                <div key={category.idCategory}>
                  <CategoryCard
                    category={category}
                    backgroundColor={(items as ICategory[]).indexOf(category) % 2 === 0 ? "bg-secondary" : "bg-primary"}
                  />
                </div>
              )
            })}
          </>
        )}
        {items.length > 0 && type === "meals" && (
          <>
            {(items as IMeal[]).map((meal) => {
              return (
                <div key={meal.idMeal}>
                  <MealsCard
                    meal={meal}
                    backgroundColor={(items as IMeal[]).indexOf(meal) % 2 === 0 ? "bg-secondary" : "bg-primary"}
                  />
                </div>
              )
            })}
          </>
        )}
      </article>
    </section>
  )
}
