<template>
    <Story title="Skeleton/Demo">
        <Variant title="header">
            <Skeleton>
                <SkeletonHeader/>
            </Skeleton>
        </Variant>
        <Variant title="box">
            <Skeleton>
                <SkeletonCustomBox style="height: 350px"/>
            </Skeleton>
        </Variant>
        <Variant title="circle">
            <Skeleton>
                <SkeletonCustomCircle size="144"/>
            </Skeleton>
        </Variant>
        <Variant title="line">
            <Skeleton>
                <SkeletonLine/>
            </Skeleton>
        </Variant>
        <Variant title="list">
            <Skeleton>
                <SkeletonList/>
            </Skeleton>
        </Variant>
        <Variant title="example">
            <Skeleton>
                <div class="flexbox">
                    <div class="sidebar blank height-auto">
                        <SkeletonCustomCircle
                            size="144"
                            style="margin: 0 auto 2rem;"
                        />
                        <template
                            v-for="i in 3"
                            :key="i"
                        >
                            <SkeletonLine/>
                            <SkeletonList/>
                            <SkeletonList/>
                            <SkeletonList/>
                        </template>
                    </div>
                    <div class="content">
                        <div class="article">
                            <div
                                class="article-body"
                                style="padding-top: 0;"
                            >
                                <span
                                    class="skeleton-custom-box"
                                    style="height: 350px; margin-bottom: 2rem;"
                                >
                                    <!-- AVOID ADDING ANY CONTENT INTO THE SKELETON <i class="fas fa-image"></i> -->
                                </span>
                                <template
                                    v-for="i in 2"
                                    :key="i"
                                >
                                    <SkeletonHeader style="width: 70%"/>
                                    <SkeletonLine/>
                                    <SkeletonLine/>
                                    <SkeletonLine style="width: 60%;"/>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>

                <ul class="thumbs">
                    <li
                        v-for="i in 10"
                        :key="i"
                    >
                        <SkeletonCustomBox style="width: 120px; height: 120px;"/>
                        <SkeletonLine/>
                    </li>
                </ul>

                <div class="fields">
                    <div
                        v-for="i in 6"
                        :key="i"
                        class="field"
                    >
                        <div class="name">
                            <SkeletonLine/>
                        </div>
                        <div class="value">
                            <SkeletonHeader style="width: 50%;"/>
                            <SkeletonLine/>
                            <SkeletonLine/>
                            <SkeletonLine/>
                            <SkeletonLine style="width: 70%;"/>
                        </div>
                    </div>
                </div>
            </Skeleton>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    Skeleton,
    SkeletonCustomBox,
    SkeletonCustomCircle,
    SkeletonHeader,
    SkeletonLine,
    SkeletonList,
} from '@/skeleton'
</script>
