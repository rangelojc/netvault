<template>
    <div class="app-content">
        <div class="pwmanager">
            <div class="actions"></div>
            <div class="pwlist" :class="getListMode()">
                <button class="add-category">
                    <span>+ ADD CATEGORY</span>
                </button>

                <div class="category" v-for="category in categories">
                    <div class="head">
                        <div class="head-title">
                            <span class="title">{{category.label.toUpperCase()}}</span>
                            <span class="cnt">{{`(${getCategoryCount(category.categoryId)})`}}</span>
                        </div>
                        <div class="head-actions">
                            <span>SORT BY</span>
                            <div class="select-wrapper">DEFAULT</div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="record-items">
                        <div
                            class="record"
                            v-for="record, idx in records"
                            v-if="category.categoryId === record.categoryId"
                            :key="idx"
                        >
                            <span>{{record.label}}</span>
                        </div>
                        <div class="hidden" :key="`item${item}`" v-for="item in 3"></div>
                    </div>
                </div>

                <div class="category">
                    <div class="head">
                        <div class="head-title">
                            <span class="title">UNCATEGORIZED</span>
                            <span class="cnt">{{`(${getCategoryCount(null)})`}}</span>
                        </div>
                        <div class="head-actions">
                            <span>SORT BY</span>
                            <div class="select-wrapper">DEFAULT</div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="record-items">
                        <div
                            class="record"
                            v-for="record, idx in records"
                            v-if="record.categoryId == null"
                            :key="idx"
                        >{{record.label}}</div>
                        <div class="hidden" :key="`item${item}`" v-for="item in 3"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

import { pwApi } from "../assets/scripts/apiService";

export default Vue.extend({
    layout: "main",
    computed: {
        ...mapState("pwmanager", {
            categories: state => state.categories,
            records: state => state.records
        })
    },
    data() {
        return {
            listMode: "grid"
        };
    },
    methods: {
        getListMode() {
            return {
                grid: this.listMode === "grid",
                list: this.listMode === "list"
            };
        },
        getCategoryCount(categoryId) {
            return this.records.filter(r => r.categoryId === categoryId).length;
        }
    },
    mounted() {
        const userId = localStorage.NETVAULT_USERID;

        pwApi.getCategories(userId).then(data => {
            this.$store.dispatch("pwmanager/categories", data.data);
        });

        pwApi.getRecords(userId).then(data => {
            this.$store.dispatch("pwmanager/records", data.data);
        });
    }
});
</script>

<style lang="scss">
@import "~/assets/scss/vars.scss";

.pwmanager {
    width: 100%;
    height: 100%;

    .actions {
        height: 50px;
        width: 100%;
    }
}

.pwlist {
    height: calc(100% - 50px);

    padding: 20px;
    overflow: auto;

    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;

    &.grid {
        .category .record-items {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
        }

        .record {
            margin: 10px;
            height: 60px;
            width: 20%;

            background: $dark41;
            border-radius: 3px;
        }

        .hidden {
            width: 29%;
            height: 0px;
            margin: 10px;
        }
    }

    &.list {
        .category .record-items {
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
        }

        .record {
            flex: 0 0 auto;
            margin: 10px;
            height: 60px;
            border-radius: 3px;
            width: 100%;

            background: $dark41;
        }

        .hidden {
            width: 0;
            height: 0px;
            margin: 0;
        }
    }

    .add-category {
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        background: transparent;
        letter-spacing: 2px;

        &:hover {
            transition: 300ms;
            background: $dark41;
        }
    }
}

.pwlist .category {
    width: 100%;
    height: auto;
    margin-bottom: 20px;

    .head {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items: center;

        &-title {
            min-width: 140px;

            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;

            flex: 1 0 auto;

            span {
                display: inline-block;
                letter-spacing: 2px;
                font-size: 18px;
                width: auto;
                height: auto;
                flex: 0 0 auto;
            }

            .cnt {
                margin: 0 20px 0 5px;
                font-size: 16px;
                color: $secondarytxt;
            }
        }

        &-actions {
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-start;
            align-items: center;

            flex: 1 1 auto;
            width: 100%;

            > span {
                color: $secondarytxt;
                white-space: nowrap;
            }

            > .select-wrapper {
                margin-left: 10px;
                color: $secondarytxt;

                background: $dark41;
                border-radius: 5px;
                font-size: 14px;
                text-align: center;
                padding: 2px 10px;
            }

            > .line {
                flex: 1 1 auto;
                width: 100%;
                height: 0px;
                border-bottom: 2px solid $dark31;
                margin-left: 10px;
            }
        }
    }

    .record-items {
        margin-top: 10px;
        width: 100%;
        height: auto;

        .record {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            span {
                font-size: 18px;
            }

            &:hover {
                transition: 200ms;
                background: rgba($accent1, 0.5);
            }
        }
    }
}
</style>