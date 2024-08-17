import TaskModel from "@/models/Task";
import connectToDatabase from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

connectToDatabase();
export async function POST(request: NextRequest) {
    try {
        const { title, description } = await request.json();
        if (!title || !description) {
            return NextResponse.json({ "message": "All field is required" }, { status: 500 })
        }
        const newTask = new TaskModel({
            title: title,
            description: description
        })

        await newTask.save();
        return NextResponse.json({
            "message": "Task Added successfully"
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function GET(request: NextRequest) {
    try {
        const allTask = await TaskModel.find();
        return NextResponse.json({
            "message": "Fetch successfully",
            "data": allTask
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { id } = await request.json();
        const deleteTask = await TaskModel.findByIdAndDelete({ _id: id });
        return NextResponse.json({
            "message": "deleted successfully",
            "data": deleteTask
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function PUT(request: NextRequest) {
    try {
        const { id, title, description } = await request.json();
        const findTask = await TaskModel.findOne({ _id: id });
        if (!findTask) {
            return NextResponse.json({ "message": "Task cannot be finded" }, { status: 500 })
        }
        const update = {
            title: title,
            description: description
        }
        const newAdded = await TaskModel.findByIdAndUpdate(id, update, { new: true });
        return NextResponse.json({
            "message": "updated successfully",
            "data": newAdded
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
