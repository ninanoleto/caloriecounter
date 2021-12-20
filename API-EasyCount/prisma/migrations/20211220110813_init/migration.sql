-- DropForeignKey
ALTER TABLE "DayPreset" DROP CONSTRAINT "DayPreset_presetId_fkey";

-- DropForeignKey
ALTER TABLE "FoodPortion" DROP CONSTRAINT "FoodPortion_foodId_fkey";

-- DropForeignKey
ALTER TABLE "FoodPortion" DROP CONSTRAINT "FoodPortion_mealId_fkey";

-- AddForeignKey
ALTER TABLE "DayPreset" ADD CONSTRAINT "DayPreset_presetId_fkey" FOREIGN KEY ("presetId") REFERENCES "Preset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodPortion" ADD CONSTRAINT "FoodPortion_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodPortion" ADD CONSTRAINT "FoodPortion_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "DayPreset.date_unique" RENAME TO "DayPreset_date_key";
