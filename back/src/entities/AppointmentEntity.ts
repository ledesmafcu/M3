import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";


@Entity({
    name: 'appointment'
})
export class AppointmentEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column("date")
    date: Date

    @Column()
    time: Date

    @Column()
    status:StatusEnum

    @ManyToOne(()=> UserEntity, (user)=> user.appointments)
    user: UserEntity
}

export enum StatusEnum{
    ACTIVO='active',
    CANCELADO='cancel'
}