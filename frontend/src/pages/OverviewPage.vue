<template>
    <div class="flex flex-col h-full pt-2">
        <!-- Up Section -->
        <section class="flex flex-col lg:flex-row w-full gap-5">
            <!-- My Cards -->
            <div class="min-w-[730px] flex flex-col">
                <div class="w-full flex flex-row justify-between mb-2">
                    <p class="text-lg font-medium">Meus Cartões</p>
                    <p class="text-lg font-medium">Ver Todos</p>
                </div>
                <div class="w-full h-[235px] flex flex-row gap-5">
                    <div class="w-full h-full bg-white dark:bg-[#121212] rounded-3xl"></div>
                    <div class="w-full h-full bg-white dark:bg-[#121212] rounded-3xl"></div>
                </div>
            </div>

            <!-- Recent Transactions -->
            <div class="w-full flex flex-col">
                <p class="text-lg font-medium mb-2">Transações Recentes</p>
                <div class="w-full min-h-[235px] bg-white dark:bg-[#121212] rounded-3xl"></div>
            </div>

            <!-- Currencies Market -->
            <div class="w-full flex flex-col">
                <p class="text-lg font-medium mb-2">Moedas</p>
                <div class="w-full min-h-[235px] bg-white dark:bg-[#121212] rounded-3xl"></div>
            </div>
        </section>

        <!-- Down Section -->
        <section class="flex flex-1 flex-col lg:flex-row w-full gap-5 h-[400px] mt-2">
            <div class="h-full flex flex-col grow-7">
                <p class="text-lg font-medium mb-2">Relatório Semanal</p>
                <div class="h-full w-full bg-white dark:bg-[#121212] rounded-3xl"></div>
            </div>

            <div class="h-full flex flex-col grow-5">
                <p class="text-lg font-medium mb-2">Estatísticas de Despesas</p>
                <div class="h-full w-full bg-white dark:bg-[#121212] rounded-3xl"></div>
            </div>

            <div class="h-full flex flex-col grow-2">
                <p class="text-lg font-medium mb-2">Estatísticas de Despesas</p>
                <div class="h-full w-full bg-white dark:bg-[#121212] rounded-3xl mb-2"></div>
                <div class="h-full w-full bg-white dark:bg-[#121212] rounded-3xl"></div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
</script>