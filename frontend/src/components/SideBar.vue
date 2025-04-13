<template>
    <div class="w-[66px] h-[90%] bg-[#121212] rounded-full ml-[32px] flex flex-col items-center py-6">
        <!-- Logo -->
        <BarChartIcon class="h-10 w-10 text-gray-100 mb-12 cursor-pointer"/>
        <!-- Buttons -->
         <div class="flex flex-col items-center justify-start grow">
            <Button variant="link" size="icon" class="text-gray-100 cursor-pointer">
                <LayoutGridIcon class="w-4 h-4"/>
            </Button>

            <Button variant="link" size="icon" class="text-gray-100 cursor-pointer">
                <WalletIcon class="w-4 h-4"/>
            </Button>

            <Button variant="link" size="icon" class="text-gray-100 cursor-pointer">
                <ChartColumnBigIcon class="w-6 h-6"/>
            </Button>

            <Button variant="link" size="icon" class="text-gray-100 cursor-pointer">
                <CreditCardIcon class="w-4 h-4"/>
            </Button>
         </div>
         <Button variant="link" size="icon" class="text-gray-100 cursor-pointer">
                <LogOutIcon class="w-12 h-12"/>
        </Button>
    </div>
</template>

<script setup lang="ts">
import { 
  BarChartIcon, 
  LayoutGridIcon,
  LogOutIcon,
  WalletIcon,
  ChartColumnBigIcon,
  CreditCardIcon
} from 'lucide-vue-next';

import {
    Button
} from '@/components/ui'

</script>

<style scoped>
.lucide-icon {
  width: inherit !important;
  height: inherit !important;
}
</style>
